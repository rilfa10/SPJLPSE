import DownloadPDF from "./downloadPDF";

const Generate = ({rincianbiaya}) => {
    return(
        <div>
            <DownloadPDF rincianbiaya={rincianbiaya}/>
        </div>
    )
}

export default Generate;
