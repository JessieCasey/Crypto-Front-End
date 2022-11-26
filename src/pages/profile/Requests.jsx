import React, {useState, useMemo} from 'react';
import Pagination from './Pagination';

let PageSize = 4;

const Requests = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(props.requests);
        return props.requests.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <table className={'table table-hover'}>
                <thead className={'table-header'}>
                <tr className={'request-header'} style={{background: '#FFF'}}>
                    <th>Status</th>
                    <th>Request</th>
                    <th>Time stamp</th>
                    <th>Credit</th>
                </tr>
                </thead>
                <tbody>
                {currentTableData.map(item => {
                    return (
                        <tr>
                            <td style={{color: item.status.toString().slice(0, 1) === '2' ? "green" : "red"}}>{item.status}</td>
                            <td>{item.url}</td>
                            <td>{item.time}</td>
                            <td>1</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={props.requests.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}
export default Requests;