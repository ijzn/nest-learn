import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get('findAll')
  findAll(@Query() pagintionQuery) {
    const { limit, offset } = pagintionQuery;
    console.log('findAll', limit, offset);
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    // const { id } = Params;
    console.log('findOne', id, typeof id);
    return this.coffeeService.findOne(`${id}`);
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  creat(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(
      'create controller',
      createCoffeeDto,
      createCoffeeDto instanceof CreateCoffeeDto,
    );
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    console.log('update', id, updateCoffeeDto);

    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
