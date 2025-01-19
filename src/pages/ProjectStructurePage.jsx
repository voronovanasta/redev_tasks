import { Layout, Typography } from 'antd';

const { Title } = Typography;
export function ProjectStructurePage() {
  return (
    <Layout>
      <Title level={3}> Basic structure of React project</Title>
      <pre style={{ margin: '0 0 20px 0' }}>
        {`my-app                              
- node_modules/                      
- public/                            
  - index.html                       
- src/                               
  - assets/                          
  - components/                      
    - App.jsx                        
    - Todo                           
  - pages/                           
  - utils/                           
  - redux/                           
  - routes/                          
  - index.jsx                        
  - styles/                          
- package.json                      
- package-lock.json                 
- README.md                         
- .env                              
- .gitignore                        
`}
      </pre>
    </Layout>
  );
}
