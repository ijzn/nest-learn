import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from '../entities/coffee.entity';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Roast',
      brand: 'bubby Brew',
      flavors: ['冰爽', '醇和'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    // throw 'A random error';
    console.log('findOne service', id);
    const coffee = this.coffees.find((item) => +item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    console.log('create', createCoffeeDto.id);
    const newCoffee = {
      ...createCoffeeDto,
      id: createCoffeeDto.id,
    };
    this.coffees.push(newCoffee);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update existing entity
      return {
        updateCoffeeDto,
      };
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
