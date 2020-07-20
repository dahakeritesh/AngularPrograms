import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "disc",
})
export class DiscPipe implements PipeTransform {
  transform(value) {
    return value * 0.05;
  }
}
