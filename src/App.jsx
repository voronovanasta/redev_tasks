import { Routes, Route } from 'react-router-dom';
import { MainComponent } from './components/MainComponent';
import { ProjectStructurePage } from './pages/ProjectStructurePage';
import { VDOMPage } from './pages/VDOMPage';
import { PropsPage } from './pages/PropsPage';
import { StatePage } from './pages/StatePage';
import { LifecyclePage } from './pages/LifecyclePage';
import { EventsPage } from './pages/Eventspage';
import { RefsPage } from './pages/RefsPage';
import { FragmentPage } from './pages/FragmentPage';
import { KeyPage } from './pages/KeyPage';
import { ReactMemoPage } from './pages/ReactMemoPage';
import { UseCallbackPage } from './pages/UseCallbackPage';
import { UseMemoPage } from './pages/UsememoPage';
import { LazyPage } from './pages/LazyPage';
import { ContextPage } from './pages/ContextPage';
import { RouterPage } from './pages/RouterPage';
import { HomePage } from './pages/HomePage';
import './App.css';
import { HOCPage } from './pages/HOCPage';
import { FormPage } from './pages/FormPage';
import { StoragePage } from './pages/StoragePage';
import { ComponentPage } from './pages/ComponentPage';

function App() {
  return (
    <Routes>
      <Route element={<MainComponent />}>
        <Route index element={<HomePage />} />
        <Route path='/structure' element={<ProjectStructurePage />} />
        <Route path='/vdom' element={<VDOMPage />} />
        <Route path='/component' element={<ComponentPage />} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/state' element={<StatePage />} />
        <Route path='/lifecycle' element={<LifecyclePage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/refs' element={<RefsPage />} />
        <Route path='/fragment' element={<FragmentPage />} />
        <Route path='/key' element={<KeyPage />} />
        <Route path='/memo' element={<ReactMemoPage />} />
        <Route path='/usememo' element={<UseMemoPage />} />
        <Route path='/callback' element={<UseCallbackPage />} />
        <Route path='/lazy' element={<LazyPage />} />
        <Route path='/context' element={<ContextPage />} />
        <Route path='/router' element={<RouterPage />} />
        <Route path='/hoc' element={<HOCPage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/storages' element={<StoragePage />} />
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
