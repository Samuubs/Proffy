import React, { FormEvent, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import api from "../../services/api";
import Background from '../../assets/images/background.svg';

import Dropzone from 'react-dropzone';
import socket from 'socket.io-client';

import { MdInsertDriveFile } from 'react-icons/md'

import Logo from '../../assets/images/logo.svg';

import './styles.css';
import PageHeader from "../../components/PageHeader";

export interface Curse {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface Props extends RouteComponentProps<
    { myParamProp?: string }, // this.props.match.params.myParamProp
    any, // history
    { curse?: Curse } // this.props.location.state.myStateProp
    > {
    myNormalProp: boolean;
}

function UploadClasses(props: Props) {
    const history = useHistory();

    const [newClass, setClass] = useState('');

    const handleUpload = (files) => {
        // files.forEach(file => {
        //     const formData = new FormData();
        //     const { id } = this.props.match.params;

        //     formData.append('file', file);

        //     api.post(`boxes/${id}/files`, formData);
        // });
    }

    // const subscribeToNewFiles = () => {
    //     const { id } = this.props.match.params;
    //     const io = socket('https://omnistack-backend.herokuapp.com');

    //     io.emit('connectRoom', id);
    //     io.on('file', data => {
    //         this.setState({
    //             box: {
    //                 ...this.state.box,
    //                 files: [
    //                     data,
    //                     ...this.state.box.files,
    //                 ]
    //             }
    //         })
    //     })
    // }

    return (
        <div id="box-container">
            <PageHeader title="Aqui você adiciona as aulas" description="Faça o upload dos arquivos de aula para seus alunos!" />

            <div className="dropfile">
                <header>
                    <img src={Logo} alt="Logo da aplicação" />
                </header>

                <Dropzone onDropAccepted={handleUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="upload" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Arraste arquivos ou clique aqui</p>
                        </div>
                    )}
                </Dropzone>

                {/* <ul>
                    {newClass.files && this.state.box.files.map(file => (
                        <li key={file._id}>
                            <a className="fileInfo" href={file.url} target="_blank">
                                <MdInsertDriveFile size={24} color="#A5CFFF" />
                                <strong>{file.title}</strong>
                            </a>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>


        // <div>
        //     <div id="box-container" style={{ backgroundImage: `url(${Background})` }}>
        //     <PageHeader
        //         title="Que incrível que você quer dar aulas."
        //         description="O primeiro passo é preencher esse formulário de inscrição."
        //     />




        //     </div>
        // </div>
    );
}

export default UploadClasses;