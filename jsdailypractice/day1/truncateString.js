const truncateString = (str, length) => 
    str.length > length ? str.slice(0, length) + "..." : str;


console.log(truncateString("ARYAN IS LODU", 5));
