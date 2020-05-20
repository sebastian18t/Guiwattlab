import React, { Component } from 'react'
import FilaTable from '../componentes/FilaTable';

class Table extends Component {

    tablaPublicidad = () => {
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(publicidad => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            tipo='publicidad'
                            key={publicidad.id}
                            id={publicidad.id}
                            titulo={publicidad.titulo}
                            descripcion={publicidad.descripcion}
                            url={publicidad.url}
                            estado={publicidad.estado}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }

    tablaUsuario = () => {
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                        <th scope="col">{this.props.t7}</th>
                        <th scope="col">{this.props.t8}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(usuario => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            tipo='usuario'
                            key={usuario.id}
                            id={usuario.id}
                            usuario={usuario.username}
                            nombre={usuario.first_name}
                            apellido={usuario.last_name}
                            email={usuario.email}
                            perfil={usuario.profile.tipo_usuario}
                            estado={usuario.is_active}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }

    tablaFacturas = () => {
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                        <th scope="col">{this.props.t7}</th>
                        <th scope="col">{this.props.t8}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(factura => (
                        <FilaTable
                            tipo='factura'
                            verFactura={this.props.verFactura}
                            key={factura.id}
                            id={factura.id}
                            valorConsumo={factura.vlr_cnsmo}
                            valorMora={factura.vlr_intrss_mra}
                            valorReconexion={factura.vlr_rcnxn}
                            valorAPagar={factura.vlr_ttl}
                            fechaPago={factura.fcha_lmte_pgo}
                            fechaCorte={factura.fcha_crte_srvco} 


                            
                            consumoKWH={factura.cnsctvo_cnsmo.kwh}
                            periodoConsumo={factura.cnsctvo_cnsmo.prdo_cnsmo}
                            valorKWH={factura.cnsctvo_trfa.vlr_kwh} 
                            observacionTarifa={factura.cnsctvo_trfa.obsrvcn} 
                            valorConsumo={factura.vlr_cnsmo} 
                            valorInteresMora={factura.vlr_intrss_mra} 
                            valorReconexion={factura.vlr_rcnxn} 
                            valorTotal={factura.vlr_ttl} 
                            fechaLimitePago={factura.fcha_lmte_pgo} 
                            fechaCorteServicio={factura.fcha_crte_srvco} 
                            observacion={factura.obsrvcn} 
                            idContrato={factura.cnsctvo_cnsmo.idntfccn_cntrto.id}
                            contratoCliente={factura.cnsctvo_cnsmo.idntfccn_cntrto.cliente}
                            estrato={factura.cnsctvo_cnsmo.idntfccn_cntrto.estrt_scl}
                            direccion={factura.cnsctvo_cnsmo.idntfccn_cntrto.drccn}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }

    tablaCliente = () =>{
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                        <th scope="col">{this.props.t7}</th>
                        <th scope="col">{this.props.t8}</th>
                        <th scope="col">{this.props.t9}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(cliente => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            crearContrato={this.props.crearContrato}
                            verContrato={this.props.verContrato}
                            tipo='cliente'
                            key={cliente.id}
                            id={cliente.id}
                            numeroIdent={cliente.nmro_idntfccn}
                            nombre={cliente.prmr_nmbre}
                            apellido={cliente.prmr_aplldo}
                            fechaNa={cliente.fcha_ncmnto}
                            tipoIdent={cliente.tpo_idntfcn}
                            tipoClient={cliente.tpT_clnte}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }

    tablaContrato = () => {

        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(contrato => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            crearContrato={this.props.crearContrato}
                            tipo='contrato'
                            key={contrato.id}
                            id={contrato.id}
                            estrato={contrato.estrt_scl}
                            direccion={contrato.drccn}
                            estado={contrato.estado}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)

    }

    mostrarTabla = () => {
        if (this.props.tabla === 'publicidad') {
            return this.tablaPublicidad()
        }
        if (this.props.tabla === 'usuario') {
            return this.tablaUsuario()
        } 
        if (this.props.tabla === 'factura') {
            return this.tablaFacturas()
        }
        if(this.props.tabla==='cliente'){
            return this.tablaCliente();
        }
        if(this.props.tabla === 'contrato'){
            return this.tablaContrato()
        }
        else {
            return null
        }
    }



    render() {
        return (
            this.mostrarTabla()
        )
    }

}

export default Table
