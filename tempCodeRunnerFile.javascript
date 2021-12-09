
function mergeSort(numbers, inicio, fim) {
    if (inicio < fim) {
        let middle = (inicio + fim) >> 1;
        console.log(middle);
        mergeSort(numbers, inicio, middle);
        mergeSort(numbers, middle + 1, fim);
        merge(numbers, inicio, middle, fim);
    }
}

function merge(numbers, inicio, middle, fim) {
        let inicio1 = inicio;
        let inicio2 = middle + 1;
        let aux = [];

        while ((inicio1 <= middle) && ( inicio2 <= fim) ) {
            if (numbers[inicio1] < numbers[inicio2]) {
                aux.push(numbers[inicio1]);
                inicio1 += 1
            } else {
                aux.push(numbers[inicio2]);
                inicio2 += 1
            }
        }
        while (inicio1 <= middle) {
            aux.push(numbers[inicio1])
            inicio1 =+ 1
        }
        while (inicio2 <= fim) {
            aux.push(numbers[inicio2])
            inicio2 =+ 1
        }
        for(let i = 0; i < aux.length; i += 1) {
            numbers[inicio + i] = aux[i]
        }
}


const arr = [5, 4, 3, 2, 1]
const i = 0
const f = arr.length - 1
console.log(mergeSort(arr, i, f))
