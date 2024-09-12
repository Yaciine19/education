function findMaxValue(arr) {
    if (arr.length === 0) {
        console.log("The array is empty.");
        return;
    }
    
    let maxValue = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    
    console.log("The maximum value in the array is:", maxValue);
}

// مثال على الاستخدام
const numbers = [10, 5, 8, 20, 3];
findMaxValue(numbers); // The maximum value in the array is: 20
