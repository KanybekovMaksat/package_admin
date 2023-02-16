//interface for form 
export interface ISFormField {
    category: string
    title: string
    subtitle: string
    price: number
    date: string
    image: string
}

//interface for form option
export interface IOption {
    value: string,
    label:string
}