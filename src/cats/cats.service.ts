import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }
    findOne(id: string) {
        return this.cats.find((item) => item.id === id);
    }
    findAll(): Cat[] {
        return this.cats;
    }
} 