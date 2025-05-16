import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';

import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@/pages/OurShop/components/SelectBox';

const Filter = () => {
  const { containerFilter, boxIcon, boxLeft } = styles;

  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };

  const handleGetShowGrid = type => {
    setIsShowGrid(type === 'grid');
  };

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
        />

        <div className={boxIcon}>
          <TfiLayoutGrid3
            style={{ fontSize: '20px', cursor: 'pointer' }}
            onClick={() => handleGetShowGrid('grid')}
          />
          <div
            style={{
              height: '20px',
              width1: '1px',
              backgroundColor: '#e1e1e1',
            }}
          />
          <CiCircleList
            style={{ fontSize: '27px', cursor: 'pointer' }}
            onClick={() => handleGetShowGrid('list')}
          />
        </div>
      </div>

      <div className={boxLeft}>
        <div
          style={{
            fontSize: '14px',
          }}
        >
          Show
        </div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='show'
        />
      </div>
    </div>
  );
};

export default Filter;
