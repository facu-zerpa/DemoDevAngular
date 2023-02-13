import { Component } from '@angular/core';
import { Infraccion } from 'src/model/Infraccion';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public infracciones: Infraccion[] = [
    {
      id: uuidv4().split('-')[0],
      documento: '25001002',
      fecha: new Date('2022-05-05'),
      codigo: 'A014',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '40012493',
      fecha: new Date('2022-03-05'),
      codigo: 'A010',
      importe: 5999.99,
      fechaPago: new Date('2022-02-01')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '31345345',
      fecha: new Date('2022-02-08'),
      codigo: 'A002',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '17933451',
      fecha: new Date('2022-12-29'),
      codigo: 'A007',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '31345345',
      fecha: new Date('2022-12-01'),
      codigo: 'A004',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '31345345',
      fecha: new Date('2022-08-14'),
      codigo: 'A003',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '25001002',
      fecha: new Date('2022-01-17'),
      codigo: 'A012',
      importe: 5999.99,
      fechaPago: new Date('2022-02-01')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '25001002',
      fecha: new Date('2022-01-11'),
      codigo: 'A012',
      importe: 101.20,
      fechaPago: new Date('2022-02-01')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '25001002',
      fecha: new Date('2022-01-11'),
      codigo: 'A013',
      importe: 5999.99,
      fechaPago: new Date('2022-08-19')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '17933451',
      fecha: new Date('2022-02-20'),
      codigo: 'A012',
      importe: 101.20,
      fechaPago: new Date('2022-02-01')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '31345345',
      fecha: new Date('2022-02-08'),
      codigo: 'A005',
      importe: 103.20,
      fechaPago: new Date('2022-01-01')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '17933451',
      fecha: new Date('2022-03-20'),
      codigo: 'A012',
      importe: 101.20,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '31345345',
      fecha: new Date('2022-02-08'),
      codigo: 'A001',
      importe: 3555.20,
      fechaPago: new Date('2022-02-03')
    },
    {
      id: uuidv4().split('-')[0],
      documento: '40012493',
      fecha: new Date('2022-11-03'),
      codigo: 'A009',
      importe: 5999.99,
      fechaPago: null
    },
    {
      id: uuidv4().split('-')[0],
      documento: '25001002',
      fecha: new Date('2022-02-10'),
      codigo: 'A015',
      importe: 1003.99,
      fechaPago: new Date('2022-03-20')
    }
  ];
  public resultInfracciones: Infraccion[] = [];
  public mensajeError: string = "";
  public error: boolean = false;
  public documento: string = "";
  public result: boolean = false;

  handleClick(e: Event): void {
    if (this.documento === '') {
      this.result = true;
      this.resultInfracciones = this.infracciones;
    } else {
      const regex = new RegExp("[0-9]");
      if (!regex.test(this.documento)) {
        this.mensajeError = 'Solo se permiten caracteres numericos.';
        this.error = true;
        return;
      }
      if (this.documento.length !== 8) {
        this.mensajeError = 'Solo se permiten 8 caracteres numericos.';
        this.error = true;
        return;
      }
      this.resultInfracciones = this.infracciones.filter(i => i.documento === this.documento)
      if(this.resultInfracciones.length === 0) {
        this.result = false;
      } else {
        this.result = true;
      }
    }
  }

  handleChange(e: Event): void {
    const element = e.currentTarget as HTMLInputElement;
    this.documento = element.value;
  }

  handleClickPagar(e: Event, id: string): void {
    let infraccion: Infraccion | undefined = this.infracciones.find(i => i.id === id);
    console.log(infraccion);
    if (infraccion !== undefined) {
      infraccion.fechaPago = new Date();
      this.resultInfracciones = this.infracciones;
    }
  }

  ToShortDateString(date: Date | null): string {
    return date !== null ? date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }) : "";
  }
}
