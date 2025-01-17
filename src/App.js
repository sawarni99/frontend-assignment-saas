import './App.css';
import useFetch from './hooks/useFetch';
import Loading from './components/loading/Loading'
import Error from './components/error/Error'
import Table from './components/table/Table';

/**
 * Hero page to show the data.
 */
function App() {

    // Variable to store the API endpoint.
    const url = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
    const tableColumns = ['S.No.', 'Percentage Funded', 'Amount Pledged'];
    const tableTitle = 'Highly-Rated Kickstarter Projects'

    // Fetching API data from the API endpoint.
    const { data, loading, error } = useFetch(url);

    // Parsing the data to desired output.
    const tableData = data?data.map(item => ([
            item['s.no'],
            `${item['percentage.funded']}%`,
            `$${item['amt.pledged']}`
        ]
    )):null;
    
    // Display loading while the API data is being fetched.
    if (loading) return <Loading />

    // Display Error if the API request fails.
    if (error) return <Error />

    return (
        <div className='App'>
            <Table 
                title={tableTitle}
                columns={tableColumns} 
                data={tableData} 
                numRow={5}
            />
        </div>
    );
}

export default App;
