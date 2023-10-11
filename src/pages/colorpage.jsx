import React from 'react';
import style from './colorpage.module.css';
import { ColorPicker } from '../components/colorpicker';
import { Button } from '../components/ui/button';
import { Palette } from '../components/palette';

export const ColorPage = () => {
  const colors = [
    { id: 1, color: '#FF453A' },
    { id: 2, color: '#FF9F0A' },
    { id: 3, color: '#FFD60A' },
    { id: 4, color: '#32D74B' },
    { id: 5, color: '#64D2FF' },
    { id: 6, color: '#0A84FF' },
    { id: 7, color: '#BF5AF2' },
    { id: 8, color: '#FF375F' },
  ];

  const [open, setOpen] = React.useState(false);
  const [paletteItems, setPaletteItems] = React.useState([{ id: 0, color: '#3fff00' }]);

  const onAddColor = (obj) => {
    if (!(paletteItems.filter((e) => e.id === obj.id).length > 0)) {
      setPaletteItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveColor = (id) => {
    setPaletteItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className={style.container}>
        <Palette items={paletteItems} onRemoveColor={onRemoveColor} setOpen={setOpen} />
        {open && (
          <div className={style.colors_wrapper}>
            {colors.map((item, id) => {
              return <ColorPicker key={id} color={item} onAdd={(obj) => onAddColor(obj)} />;
            })}
            <p></p>
          </div>
        )}
      </div>

      <Button onClick={() => setOpen(!open)}>Добавить цвет</Button>
    </>
  );
};
