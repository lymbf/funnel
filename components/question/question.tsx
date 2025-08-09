interface Question{
    id:number,
    text:string,
    answear:Answear[]
}

interface Answear{
    icon?:string,
    title?:string,
    subtitle?:string,
}
export type {Question, Answear}

interface Props{
    question:Question,
    answears:Answear[]
}

export default function Question(props:Props){

}