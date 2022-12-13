import Controller from '@ember/controller';
import FileSaver from 'file-saver';
import {inject as service} from '@ember/service';
export default Controller.extend({
    isDateFilter:false,
    isAccNoFilter:false,
    ajax: service(),
    loading: service(),
    actions:{
        changeFilter(event){
            let filterType = event.target.value;
            console.log(filterType);
            if(filterType==="date"){
                this.set("isDateFilter",true);
                this.set("isAccNoFilter",false);
            }else if(filterType==="accno"){
                this.set("isAccNoFilter",true);
                this.set("isDateFilter",false);
            }else{
                this.set("isDateFilter",false);
                this.set("isAccNoFilter",false);
            }
        },
        extractTransaction(event){
            event.preventDefault();
            this.get('loading').set('isLoading',true);
            let filterVal = filter.value;
            let formatVal = format.value;
            var param;
            if(this.get('isAccNoFilter')){
                let accnoVal = accno.value;
                param = new URLSearchParams({filter:filterVal,format:formatVal,accno:accnoVal});
            }else if(this.get('isDateFilter')){
                let fromVal = from.value;
                let toVal = to.value;
                let fromDate = new Date(fromVal);
                let toDate = new Date(toVal);
                if(toDate.getTime()-fromDate.getTime()<0){
                    alert('Enter a valid period...');
                }
                param = new URLSearchParams({filter: filterVal, format: formatVal, from: fromVal, to: toVal});
            }else{
                param = new URLSearchParams({filter: filterVal, format: formatVal})
            }
            const ext = (formatVal=='pdf')?'pdf':'xlsx';
            console.log(param.toString());
            this.get('ajax').request('/bank1/record/generate?'+param.toString(),{
                method:'GET',
                dataType:'blob'
            }).then((data)=>{
                this.get('loading').set('isLoading',false);
                FileSaver.saveAs(data,'transaction.'+ext);
            }).catch(err=>{
                this.get('loading').set('isLoading',false);
                console.log(err)
            });
        }
    }
});