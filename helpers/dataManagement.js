const{saveData,loadData}=require("./saveData");
      function manageData(candidate =[], work=true ) {
    if (work) {
        candidate.forEach((candidate, index) => {
           saveData(candidate, `file${index}.json`) ;
        });
    }else {
        candidate.forEach(async (candidate, index)=>{
const data=await loadData(`file${index}.json`);
        return [true,data];
        });
    }
}
module.exports={manageData};
