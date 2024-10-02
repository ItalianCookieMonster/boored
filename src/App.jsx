import { useState } from 'react';
import ChipList from './components/ChipList';
import GenerateActivity from './components/GenerateActivity';
import Logo from './components/Logo';
import { fetchActivities } from './services/apiService';
import Activity from './components/Activity';

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [error, setError] = useState(null);

  const chipList = [
    { id: 1, text: 'Social', filter: 'social' },
    { id: 2, text: 'Educació', filter: 'education' },
    { id: 3, text: 'Cuinar', filter: 'cooking' },
    { id: 4, text: 'Relaxació', filter: 'relaxation' },
    { id: 5, text: 'Treball Intens', filter: 'busywork' },
    { id: 6, text: 'Caritat', filter: 'charity' },
    { id: 7, text: 'Recreatiu', filter: 'recreational' },
  ];

  const handleChipClick = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter); 
      console.log(typeof selectedFilter)
    }
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    try {
      const data = await fetchActivities(selectedFilter);
      
      let selectedActivity;
      
      if (Array.isArray(data)) {
        const randomIndex = Math.floor(Math.random() * data.length);
        selectedActivity = data[randomIndex];
      } else {
        selectedActivity = data;
      }
  
      setActivity(selectedActivity); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching activity:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="p-5">
        <Logo />
      </header>
      <main className="p-5 grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-4 border-r-2 p-6 border-transparent border-dashed lg:border-black">
          <ChipList chipList={chipList} handleChipClick={handleChipClick} selectedFilters={selectedFilter}/>
          <GenerateActivity handleClick={handleGenerateClick} />
        </div>
        <div className="flex flex-col items-center justify-center gap p-6 mt-10 lg:mt-0 text-center">
          <h2 className="text-3xl font-semibold my-3">Activitat:</h2>
          <div className="px-3"> 
          {loading ? <p>Loading...</p> : activity ? <Activity text={activity.activity} /> : error ? <p>No s'ha trobat cap activitat {error}</p> : <p>Generate una activitat</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;