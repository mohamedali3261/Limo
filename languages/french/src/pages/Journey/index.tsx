import { FC } from 'react';
import { Unit } from './Unit';
import { motion } from 'motion/react';
import { unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12, unit13, unit14 } from '../../data/units';
import { useProgress } from '../../context/ProgressContext';

const unitsData = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12, unit13, unit14];

export const Journey: FC = () => {
  const { getLessonStatus } = useProgress();

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 pb-32">
      <div className="flex flex-col gap-12">
        {unitsData.map((unit) => {
          // Inject dynamic status
          const unitWithStatus = {
            ...unit,
            lessons: unit.lessons.map(lesson => ({
              ...lesson,
              status: getLessonStatus(lesson.id)
            }))
          };

          return (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Unit unit={unitWithStatus} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
