import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Observable, of } from "rxjs";


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { };

    @Post()
    @HttpCode(201)
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return `cat with name ${createCatDto.name} added`;
    }

    @Get(':id')
    findOne(@Param() params: any) {
        return this.catsService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Cat[]> {
        return of(this.catsService.findAll());
    }


}