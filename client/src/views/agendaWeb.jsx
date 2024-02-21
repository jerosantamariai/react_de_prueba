import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/agendaWeb.css';

//DatePicker Calendar
import DatePicker, { } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// FAKE API
import Prevision from '../store/fake_db/fakePrevision.jsx';
import Especialidad from '../store/fake_db/fakeEspecialidad.jsx';
import Doctores from '../store/fake_db/fakeDoctores.jsx';
import Horarios from '../store/fake_db/fakeHoras.jsx';
import Disponibilidades from '../store/fake_db/fakeDisponibilidad.jsx';

const AgendaWeb = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // console.log(Object.values(Prevision))

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3 className="my-5">Agendamiento Web</h3>
                    <form action="" className="ps-5" onClick={null}>
                        <div className="row">
                            <div className="col-2">
                                <p>Tipo de Servicio</p>
                            </div>
                            <div className="col-8">
                                <select name="" className="form-select mx-5" required>
                                    <option value="" selected disabled>-------</option>
                                    <option value="">CONSULTA MEDICA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <p>Centros Médicos</p>
                            </div>
                            <div className="col-8">
                                <div className="form-check mx-5">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        CLÍNICA
                                    </label>
                                </div>
                                <div className="form-check mx-5">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label" type="checkbox">
                                        CENTRO MÉDICO
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <p>Previsión</p>
                            </div>
                            <div className="col-8">
                                <select name="" className="form-select mx-5" required>
                                    <option selected>-----------</option>
                                    {
                                        Prevision ?
                                            Prevision.map(prev => {
                                                return (
                                                    <option key={prev.id}>{prev.nombre}</option>
                                                )
                                            }) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <p>Especialidad</p>
                            </div>
                            <div className="col-8">
                                <select name="" className="form-select mx-5" required>
                                    <option selected>-----------</option>
                                    {
                                        Especialidad ?
                                            Especialidad.map(Esp => {
                                                return (
                                                    <option key={Esp.id}>{Esp.nombre}</option>
                                                )
                                            }) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <p>Profesional Médico</p>
                            </div>
                            <div className="col-8">
                                <select name="" className="form-select mx-5" required>
                                    <option selected>-----------</option>
                                    {
                                        Doctores ?
                                            Doctores.map(Doctor => {
                                                return (
                                                    <option key={Doctor.id}>{Doctor.nombre}</option>
                                                )
                                            }) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row">
                            <div className="col-md-2">
                                <p>Días</p>
                            </div>
                            <div className="col-md-8 d-flex ms-5">
                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)} />
                                <p className="mx-3">hasta</p>
                                <DatePicker selected={endDate} dateFormat="dd/MM/yyyy" onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-2">
                                <p>Horario</p>
                            </div>
                            <div className="col-8 d-flex">
                                <select name="" className="form-select mx-5" required>
                                    <option selected>-----------</option>
                                    {
                                        Horarios ? Horarios.map(Horario => {
                                            return (
                                                <option key={Horario.id}>{Horario.hora}</option>
                                            );
                                        }) : null
                                    }
                                </select>
                                <p>hasta</p>
                                <select name="" className="form-select mx-5" required>
                                    <option selected>-----------</option>
                                    {
                                        Horarios ? Horarios.map(Horario => {
                                            return (
                                                <option key={Horario.id}>{Horario.hora}</option>
                                            );
                                        }) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <Link className="btn btn-danger" to="/dashboard">Cancelar</Link>
                        <button type="submit" className="btn btn-success ms-2">Buscar</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3 className="my-5">Agenda Disponible</h3>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Centro</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Profesional</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Disponibilidades ? Disponibilidades.map( ( Disponibilidad ) => {
                                    return (
                                        <tr>
                                            <th scope="row" key={ Disponibilidad.id }>{ Disponibilidad.id } </th>
                                            <td>{ Disponibilidad.centro }</td>
                                            <td>{ Disponibilidad.fecha }</td>
                                            <td>{ Disponibilidad.hora }</td>
                                            <td>{ Disponibilidad.profesional }</td>
                                            <td><Link className="btn btn-success" to={"/agendar-cita/" + Disponibilidad.id }>Pre-Agendar</Link></td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AgendaWeb;