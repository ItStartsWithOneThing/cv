
import React from 'react'

export default function Navigation({ categories, categoriesId }) {
    const currentCategoryRef = React.useRef('About');
    const [currentCategory, setCurrentCategory] = React.useState('About');

    const changeCategory = (event) => {
      setCurrentCategory(event.target.innerText);
    }

    React.useEffect(() => {
        const handleScroll = () => {
          const anchor = getCurrentAnchor();
          if(anchor){
            const idx = categoriesId.indexOf('#' + anchor);

            if(currentCategoryRef.current !== categories[idx]){
                setCurrentCategory(categories[idx]);
                currentCategoryRef.current = categories[idx];
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <header>
        <div className='container'>
            <nav className='nav'>
                <ul>
                    {
                        categories.map((cat, idx) => {
                            return (
                                <li key={idx} onClick={(event) => changeCategory(event)}>
                                    <a name={categoriesId[idx]} href={categoriesId[idx]} className={currentCategory === cat ? 'active' : ''}>
                                        {cat}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}

function getCurrentAnchor() {
    const sections = document.querySelectorAll('.section');  
    const windowHeight = window.innerHeight;

    let currentAnchor = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = (visibleHeight / rect.height) * 100;
        if (visibilityPercentage >= 70) {
          currentAnchor = section.id;
        }
      });

    return currentAnchor;
  }
