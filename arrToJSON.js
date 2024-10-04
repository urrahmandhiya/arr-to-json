// Mengubah array menjadi object JSON (index array = key object)
// 1. Variable untuk menyimpan nilai array dan object
// 2. Object.assign untuk menggabungkan array dengan object kosong
// 3. JSON.stringify untuk mengubah object menjadi string JSON
// 4. Operator debug untuk display hasil (console.log)

function arrToJSON() {
    var inputObj = {}, inputArr = []; //1

    document.querySelectorAll("li").forEach((elements) => { 
        let inputValue = elements.querySelector("input").value;
        inputArr.push(inputValue);
    })

    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === '') {
            alert("Please fill every Index before converting");
            return;
        }
    }

    Object.assign(inputObj, inputArr); //2
    var result = JSON.stringify(inputObj); //3
    
    console.log(result); //4
    alert(result);
}