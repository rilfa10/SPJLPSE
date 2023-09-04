import DownloadPDF from "./downloadPDF";

const Generate = ({kwitansi}) => {
    return(
        <div>
            <DownloadPDF kwitansi={kwitansi}/>
        </div>
    )
}

export default Generate;
