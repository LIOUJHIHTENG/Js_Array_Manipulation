//CallBack又稱為回調、回函、回呼函式，CallBack的定義解釋為：在某一函式執行時或執行後，依條件或依序去執行所傳遞進來的函式。簡單的來說，就是一個程式執行完再去執行另一個程式
//疊代:用迴圈去循環重複程式碼的某些部分來得到答案


let arr=[0,1,2,3,4,5]
console.log(`arr:${arr}`)

console.log("=========Array.isArray===============")
//Array.isArray(obj) 是否為陣列
console.log(`Array is Array?${Array.isArray(arr)}`)

console.log("============陣列複製============")
//複製陣列+額外的元素
const copyArr=[...arr,"copyArr"]
console.log(`copyArr:${copyArr}`)

console.log("============陣列合併============")
//array.concat(陣列)
//[array,...合併的陣列]
let concatArr=arr.concat([6,7,8,9,10])
console.log(`concatArr:${concatArr}`)
let simpleConcatArr=["a","b","c",...concatArr,"e"]
console.log(`simpleConcatArr:${simpleConcatArr}`)


console.log("=============at===========")
//array.at(索引) == arr[索引]
console.log(`at:${arr.at(-1)}`)

console.log("===========map=============")
//array.map(callback) 不會修改原本陣列(搭配 return)，陣列中的元素做轉換
const mapArrA=arr.map(function(value,index,array){
    return value*2
})
const mapArrB=arr.map(value=> value*2)
console.log(`mapArr:${mapArrB}`)

console.log("===========forEach=============")
//array.forEach(callback) 用來疊代陣列中的元素，並執行動作，會修改原本陣列(不需搭配 return)
let arrForEach=[...arr]
arrForEach.forEach(function (value,index,array) {  
    array[index]=value*3
    console.log(`arrForEach[${index}]:${array[index]}`)
})
console.log(`arrForEach:${arrForEach}`)

console.log("===========filter=============")
//array.filter(callback)很適合用在搜尋功能，能找到符合條件的資料，不會改變原陣列(搭配 return)
let arrFilter=arr.filter(function(value,index,array){
    if(value%2===0)
        return value
})
console.log(`arrFilter:${arrFilter}`)

console.log("===========slice=============")
//array.slice(begin,end) 用來擷取陣列中的部分元素（不包含 end）
console.log(`arr.slice(0,3):${arr.slice(0,3)}`)
console.log(`arr.slice(1,4):${arr.slice(1,3)}`)
console.log(`arr.slice(-3,-1):${arr.slice(-3,-1)}`)
console.log(`arr.slice(-1,-3):${arr.slice(-1,-3)}`)
console.log(`arr.slice(-2,arr.length):${arr.slice(-2,arr.length)}`)

console.log("============splice============")
//array.splice(start)、array.splice(start,deleteCount) 、array.splice(start,deleteCount,additem1,additem2...) 移除陣列元素（並放入新陣列元素）
let arrSplice=[...arr]
console.log(`arrSplice:${arrSplice}`)
let arrSpliced=arrSplice.splice(0,1)
console.log(`arrSplice.splice(0,1):${arrSplice}`)
console.log(`arrSpliced:${arrSpliced}`)
arrSplice.splice(1,2,20)
console.log(`arrSplice.splice(1,2,20):${arrSplice}`)
arrSplice.splice(1,0,"插隊")
console.log(`arrSplice.splice(1,0,25):${arrSplice}`)

console.log("============reduce============")
//array.reduce(callback)讓陣列中的每個元素與回傳的值再次作運算，將陣列化為單一值，常常拿來應用於陣列中每個元素的「累加」或是「比較」
/* 
    array.reduce(function(accumulator,currentValue,currentIndex,array){...},initialValue)
    accumulator：累加器
    currentValue：當前元素
    currentIndex：當前元素的索引（選擇性）
    array: 呼叫 reduce() 方法的陣列（選擇性）
    initialValue：第一次呼叫時要傳入的累加器初始值。（選擇性）
    若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。
*/
let sumArr=arr.reduce(function(accumulator,currentValue,currentIndex,array){
    return accumulator+currentValue
},0)
console.log(`sumArr:${sumArr}`)
let minArr=arr.reduce(function(accumulator,currentValue){
    return accumulator<currentValue?accumulator:currentValue
})
console.log(`minArr:${minArr}`)

console.log("============join============")
//array.join('<str>') 將陣列以 <str> 連接成字串，預設是","
let arrJoin=[...arr]
console.log(`arrJoin:${arrJoin.join("、")}`)

console.log("============some============")
//callback.some(callback) 檢驗陣列中是否有符合該 callback 規則的元素，有的話return true
let someArr=arr.some(function(item,index,array){
    return item>10
})
console.log(`someArr:${someArr}`)

console.log("============every============")
//array.every(callback) 檢驗陣列中所有元素是否「都符合」 callback 規則，有的話return true
let everyArr=arr.every(function(item,index,array){
    return item>2
})
console.log(`everyArr:${everyArr}`)

console.log("============find============")
//array.find(callback) 檢驗陣列中是否有符合該 callback 規則的元素，有的話 return 第一個找到的元素值
let findArr=arr.find(function(item,index,array){
    return item>3
})
console.log(`findArr:${findArr}`)

console.log("============findIndex============")
//array.findIndex(callback) 檢驗陣列中是否有符合該 callback 規則的元素，有的話 return 第一個找到的 index
let findIndexArr=arr.findIndex(function(item,index,array){
    return item%2!==0
})
console.log(`findIndexArr:${findIndexArr}`)

console.log("============indexOf============")
//array.indexOf(target[,fromIndex]) return的 index 來確定陣列內是否包含該元素，回傳 -1 代表陣列內沒有該元素，否則就是找到的元素的 index 值
let indexOfArr1=arr.indexOf(4)
console.log(`indexOfArr1:${indexOfArr1}`)
let indexOfArr2=arr.indexOf(2,2)
console.log(`indexOfArr2:${indexOfArr2}`)

console.log("============includes============")
//array.includes(target[,fromIndex]) 可選參數 fromIndex 預設為 0，代表會從陣列的最前面開始尋找符合的元素，不用管陣列的 index，直接就會 return 是否包含該元素的 Boolean 值
let includesArr1=arr.includes(1)
console.log(`includesArr1:${includesArr1}`)
let includesArr2=arr.includes(2,2)
console.log(`includesArr2:${includesArr2}`)

console.log("============pop、push、shift============")
//array.pop() 刪除最後一個元素
//array.push() 將元素塞入陣列中
//array.shift() 刪除陣列中第一個元素
let Name=["A","B","C","D"]
console.log(`Name:${Name.join(",")}`)
let popName=Name.pop()
console.log(`popName:${popName}`)
console.log(`pop之後，Name:${Name.join(",")}`)
Name.push("E")
console.log(`push之後，Name:${Name}`)
let shiftName=Name.shift()
console.log(`shiftName:${shiftName}`)
console.log(`shift之後，Name:${Name}`)

console.log("============sort============")
// sort() 方法用來重新排序陣列中的元素
/* 
    ary.sort() 預設會將元素轉型成字串再做比較，比較的方式是從左到右逐一比對元素中的每個字元的 Unicode code point 大小
    ary.sort(compareFunction) 可以傳入函數參數 compareFunction，可以用來自訂排序的邏輯，陣列會根據 compareFunction 函數的回傳值來做排序依據
*/
let fruitsSort=["cherries","apples","bananas"]
fruitsSort.sort()
console.log(`fruitsSort:${fruitsSort.join(",")}`)
let scoreSort=[1,10,21,2]
scoreSort.sort()
console.log(`scoreSort:${scoreSort.join(",")}`)

/* 
    sort()會依匿名函式的參數與回傳的值為精確的排序規則：
    當回傳值為負數時，那麼前面的數放在前面
    當回傳值為正整數，那麼後面的數在前面
    當回傳值為零，保持不動
*/
let numberSort=[4,2,5,1,3]
//精簡寫法
//升序
numberSort.sort(function(a,b){
    return a-b//a-b>0
})
console.log(`numberSort(Ascending ):${numberSort}`)

//降序
numberSort.sort(function(a,b){
    return b-a//b-a>0
})
console.log(`numberSort(Descending):${numberSort}`)

/* 
    //升序降序原本寫法:
    // 升序
    arr.sort(function(a, b) {
    if(a > b){
        return 1; // 正數時，後面的數放在前面
    } else {
        return -1 // 負數時，前面的數放在前面
    }
    });

    // 降序
    arr.sort(function(a, b) {
    if(a < b){
        return 1; // 正數時，後面的數放在前面
    } else {
        return -1 // 負數時，前面的數放在前面
    }
    });

    // 升序 另一種寫法，就會精簡到像最上面那樣！
    arr.sort(function(a, b) {
    if(a > b){ // a > b  等於 a - b > 0
        return a - b; 
    } else {
        return a - b 
    }
    });
 */