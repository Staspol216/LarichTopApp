export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    title: string;
    description: string;
    _id: string;
}

export interface HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

export interface TopPageModel {
    _id: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: number;
    advantages: TopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    hh: HhData;
}

