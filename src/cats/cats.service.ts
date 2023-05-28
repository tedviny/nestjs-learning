import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    updateById(catUpdated: Cat) {
        try {
            this.cats.find(item => item.id === catUpdated.id)!;

        }
        catch (err) {
            console.error('Cat not found');
        }
        let cat: Cat = this.cats.find(item => item.id === catUpdated.id)!;
        cat.name = catUpdated.name;
        cat.age = catUpdated.age;
        cat.breed = catUpdated.breed;
        return this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findCatById(id: string): Cat {
        return this.cats.find(item => item.id === id)!;

    }

} 