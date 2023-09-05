const colorObj ={
    color1 :'red',
    color2 :'blue',
    color3: 'orange',color4:'green'
};
//for in - iterate 
for (const key in colorObj){
    console.log(key, colorObj[key]);
}

//for in array
const colorArr =['red','green','blue','yellow'];
for(const key in colorArr){
    console.log(key,colorArr[key]);
}