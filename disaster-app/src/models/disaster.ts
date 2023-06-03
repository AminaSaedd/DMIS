import { Categorymodel } from "./category"

export class Disaster {

    id: number
    categoryId: number
    category: Categorymodel
    description: string
    typeOfDisaster: string
    district: string
    neighborhood: string
    location: string
    currentStatus: string
    remarks: string
    numberOfDamagedHouses: string
    numberOfDeaths: string
    numberOfInjuries: string
    numberOfSurvivors: string
    lossCost: string
    reportedBy: string
    contact: string
    date: string

}
