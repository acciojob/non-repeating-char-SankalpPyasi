function firstNonRepeatedChar(str) {
    str = str.toLowerCase();    
    for (let i = 0; i < str.length; i++) {
        let foundDuplicate = false;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                foundDuplicate = true;
                break;
            }
        }        
        if (!foundDuplicate) {
            return str[i];
        }
    }    
    return null;
}