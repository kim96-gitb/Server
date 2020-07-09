// 자바스크립 ctrl + /
console.log('Welcome to the class')
console.log("Hello")

console.log(20 + 30);

console.log('come'+'home')

console.log(20+'hello')

// 변수는 데이터를 메모리에 저장하는 것.

// 데이터 : 숫자 , 문자 , true/false

// nodejs(javascript) 에서는 데이터가 위의 3개.

//프로그래밍은 사람의 언어를 컴퓨터가 이해해서
// 행동 할 수 있게 사람의 언어를 번역해서 작성.

// 사람의 언어 고등어 1마리에 3,000원
// '고등어' 1 '마리에' 3000'원'

// 자바스크립트의 데이터 타입
// 3개

// var이 변수 처리하는 데이터타입 : var로 변수처리 글로벌 변수
// var price = 3000;
// var fish_name = '고등어'

// let으로 변수선언 : 메모리 낭비를 막을 수 있다.
let price = 3000;
let fish_name = '고등어'

console.log(fish_name+'   '+price)

price = 5000 // 5000을 변수에 다시 저장해라
console.log(fish_name+'   '+price)

console.log( price * 3) 

//넓이와 둘레길이를 구하는 코드를 만드세요
// a = 11 b = 7

let a=11
let b =7

let Area = a*b
let Perimeter = 2*(a+b)

console.log(Area , Perimeter)

// 표면적 부피 구하는 코드 
let c = 20
let area = 6*c**2
let volume = c**3

console.log(area +','+ volume )


//현재 속도가 90킬로 일때 mp/h로 계산하는 코드 작성
let km = 90
let mp = 0.6214 * km
console.log(mp)


let sky // undefined : 데이터가 저장 안되어 있다.
console.log(sky) 

let ground = ""
console.log(ground)
a = 75
b = 20

let result = a + b
console.log(result)

result = a - b
console.log(result)

result = a%b // 모듈로 (나머지 구해주는 기호)
console.log(result) 

// result = a++ // a에 +1을 저장하고 , result = 75
//             // a는 a에 1을 더하는 코드 cpu가 두개를 실행함

// console.log(result)
// console.log(a)

// result = b-- // b에 -1을 저장하고 ,  result = 20
//             //  b는 b에 -1을 하는 코드  cpu가 두개를 실행함

// console.log(result)
// console.log(b)

result = ++a  // a에 1을 먼저 더하고 , a = a + 1
              // a를 result에 저장하는 코드 result = a

console.log(result)
console.log(a)

// console.log( a == b)
// console.log( a > b)
// console.log( a >= b)
// console.log( a < b)
// console.log( a <= b)
// console.log( a != b)

// a에는 3을 저장하고 b에는 7을 저장하고
// c에는 9를 저장하고 b에는 10을 저장한다
// a가 5보다 크고 b는 8보다 작냐
a = 3
b = 7
c = 9
let d = 10
// console.log("")
// console.log(a > 5 && b <8 )
// console.log(c>7 || d<5)


// 삼함 연산자
console.log(a > b ? 500 : 900) // a가 b보다  크면  트루 
                              // 콜론 오른쪽 표시
                           //  a가 b보다 작으면 왼쪽 폴스

if(a > b){
    console.log('에이가 비보다 크다')
}else{
    console.log('비가 더 크다')
}             
a = 100
if(a == 30){
    console.log("1.")
}else if(a == 50){
    console.log("1")
} else{
    console.log("100")
}

// 1번 학생의 점수가 83점입니다
// 다음의 조건문을 작성하시오.
//점수가 0보다 작거나 100보다 크면 "그런점수 없음" 출력
// 점수가 80 이상이면 '유저 점수는 에이학점입니다'출력
// 점수가 80미만이면 "유저 점수는 비학점입니다" 출력

a = 83
if(a > 100 || a <0){
    console.log("그런 점수는 없습니다.")
}else if(a>=80){
    console.log(a+"는"+" 에이학점입니다")
}else{
    console.log(a+"는"+" 비학점입니다")
}


// 함수 function 정의
// 자바스크립의 함수의 파라미터는 데이터타입 없어도 알아서해줌

function addNum(a,b){
    let result = a + b
    return result
}
//함수 호출 function call 
let ret = addNum(3,4)
console.log(ret)

// 함수 선언 방법 2
// 변수에 함수를 저장
var addNum2 = function(a,b){
    let result = a + b
    return result
}

ret = addNum2(6,6)
console.log(ret)

// es6 문법
 let addNum3 = (a,b) =>{

    let result = a + b
    return result
 } 
 ret = addNum3(10,10)
 console.log(ret)

 // 객체 : 클래스가 메모리로 올라온 상태
// 객체 생성
 // 첫번째 거의 안씀
 let cook = new Object();
cook.name = "홍길동"
cook.age = 27
cook.make = ()=>{
    return "빵을 만든다"
}
console.log(cook.name+","+cook.age+","+cook.make() )

// 두번째
// Json : Javascript Object Notation

let cook2 = {
    name: "김씨", age : 24 , 
    make : () =>{
        return "한식을 만든다"
    }
}
console.log(cook2.name+","+cook2.age+","+cook2.make() )
