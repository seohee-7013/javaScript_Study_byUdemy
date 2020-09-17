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
var age=15;
switch(true){
    case age<13:
        console.log(firstName+' is a girl');
        break;
    case age=13 && age < 20:
        console.log(firstName+' is a teenager');
        break;
    default:
        console.log(firstName+ ' is a woman.');


}
var height=23;
//Equality operators 
if(height =='23'){//강제 형변환 후 검사
    console.log('The == operator does type coercion!');
 //'==' 는 강제 형변환 후 비교 
}




/* CODING CHALLENGE
   
John score=89,120,103
Mike score=116,94,123

1.average
2.compare average , print winner to the console
  (include average score)
3.else if draw or different winners
4.Mary score=97,134,105
  compare with john and mike (using &&)
*/

var Javg=(89+120+103)/3;
var Mavg=(116+94+123)/3;
var MaryAvg=(97+134+105)/3;

console.log(Javg,Mavg,MaryAvg)

if(Javg > Mavg && Javg> MaryAvg){
    console.log('john\s team wins with' + Javg+' points');
} else if(Mavg>Javg && Mavg > MaryAvg){
    console.log('Mike\'s team wins with ' + Mavg + ' points');

}else if(MaryAvg>Javg && MaryAvg > Mavg){
    console.log('Mary\'s team wins with ' + Mavg + ' points');

}
else {
    console.log('Ther is a draw');
}


/* Fuctions */

function calculatAge(birthYear){
    return 2020 - birthYear;
}

var ageSeohee= calculatAge(1996);
console.log(ageSeohee);

//Fuction expression

var whatDoyouDo= function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids'
        case 'driver':
            return firstName + ' drives a cab'
        case 'designer':
            return firstName + ' designs websites'
        default:
            return firstName + ' does something'
    }
}

console.log(whatDoyouDo('teacher', 'sh'));
console.log(whatDoyouDo('designer', 'as'));
console.log(whatDoyouDo('driver', 'ef'));


/* Array******* */

var names = ['Seohee', 'John', 'Mark'];
var years= new Array(1996,1990,1969);

console.log(names[2]);
console.log(names.length);



// Mutate array data 데이터변경
names[1]= 'Ben';
names[names.length]='Mary';
console.log(names);

//different data types
var john = ['john','smith',1990, 'teacher',false];

john.push('blue'); //마지막배열에 add
john.unshift('Mr.') //첫 배열에 add
console.log(john);

john.pop();//마지막 인덱스 제거
john.pop();
john.shift();//첫 인덱스 제거
john.indexOf(1990);//인덱스 번호
console.log(john);

console.log(john.indexOf(23));//없으면 -1



