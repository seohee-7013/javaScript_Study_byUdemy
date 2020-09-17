/*var firstName= 'Kim';
console.log(firstName);

var lastName='Seohee';
var age=25;

console.log(lastName+age);

var fullAge=true;
console.log(fullAge);

var job;  /*undefined
console.log(job);

job='Teacher';
console.log(job);*/

//coding challenge

/* mark and john are trying to compare their BMI
BMI= mass/height ^2 (mass in kg and height in meter) 

1. store Mark's and john's mass and height in variables

2. calculate both their BMIs

3. Create a boolean variable containing information about 
whether Mark has a higher BMI than John 

4. print a string to the console containing the variable from step 3. 
( Something like "Is Mike's BMI highter than John's? true ") */


var MMass= 100; //kg
var JMass= 80;

var MHeight= 1.8; //meters
var JHeight=1.7;

var MBMI= MMass/(MHeight*MHeight);
var JBMI= JMass/(JHeight*JHeight);
console.log(MBMI,JBMI);

var MHighterBMI= MBMI > JBMI;
console.log('Is Mark\'s BMI higer than john\'s?' + MHighterBMI);

var firstName = 'kim';
var civilStatus='single';

if(civilStatus==='ismarried'){
    console.log(firstName + ' is married! ');
}else{ console.log(firstName + ' will hopefully marry soon :');
}

var isMarried=true;
if(isMarried){
    console.log(firstName + ' is married!' );

}else{console.log(firstName + ' will hopefully marry soon : ');}

if(MBMI > JBMI){
    console.log('Mark\' BMI is highter than John\'s.');

}else{console.log('John\' BMI is highter than Mark\'s.');}



//Switch Statements
var jop='teacher';
switch(jop){
    case 'teacher':
        console.log(firstName+ ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName+ ' drives');
        break;
    case 'designer':
        console.log(firstName+ ' designs websites');
        break;
    default:
        console.log(firstName + ' something');
                      
}

switch(true){
    case age<13:
        console.log(firstName+' is a girl');
        break;
    case age_=13 && age < 20:
        console.log(firstName+' is a teenager');
        break;
    default:
        console.log(firstName+ ' is a woman.');


}

//Equality operators 
if(height =='23'){//강제 형변환 후 검사
    console.log('The == operator does type coercion!');
 //'==' 는 강제 형변환 후 비교 
}

