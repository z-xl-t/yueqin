export function flat(arr:any[]){
	if(Object.prototype.toString.call(arr) != "[object Array]"){return false};
	const res=[] as any[];
    arr.map(item=>{
        if(item instanceof Array){
            res.push(...item);//展开数组[11,12] 为11,12
        }else{
            res.push(item)
        }
    });
    return res;
}
const utils = {
    flat
}
export default  utils;