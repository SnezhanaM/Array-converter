'use strict';

module.exports.transform = async function transformArray(a){
    let promise = new Promise((resolve, reject) => {
        let result = '';
        if (a.length >= 1 && a.length <= 2) {
            for (let i in a){
                result += a[i];
                result += ',';
            }
            result = result.slice(0,-1);
        }

        else if (a.length > 2) {
            let j = 0;
            while (j < a.length){
                if ( j == a.length - 1) {
                    if (result != ''){
                        result += ',';
                    }
                    result += a[j];
                    break;
                }

                let first = a[j];
                let second = a[j + 1];
                if ((first == second - 1) && (j < a.length - 2)) {
                    for (let i = j + 2; i < a.length; i++) {
                        let num = a[i];
                        if (second == num - 1) {
                            j = i + 1;
                            second = num;
                        }
                        else {
                            j = i;
                            break;
                        }
                    }
                    if (result != '') {
                        result += ',';
                    }
                    if (second - first == 1) {
                        result += first + ',' + second;
                    }
                    else {
                        result += first + '-' + second;
                    }
                }   
                else {
                    if (result != '') {
                        result += ','; 
                    }
                    result += first;
                    j++;
                }    
            }
        }
        resolve(result);
    });
    return promise;
};
