import { generateDatesFromYearBeginningUtil } from "../../utils";
import HabitDay from "../HabitDay/HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginningUtil();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {
          weekDays.map(
            (weekDay, index) => {
              return (
                <div key={index} className="text-zinc-400 font-bold text-xl h-10 w-10 items-center justify-center">
                  {weekDay}
                </div>
              );
            }
          )
        }

      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {
          summaryDates.map(date => <HabitDay key={date.toString()} />)
        }
        {
          amountOfDaysToFill > 0
          && Array.from({
            length: amountOfDaysToFill
          })
            .map(
              (_, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center opacity-40 cursor-not-allowed"
                  />
                )
              }
            )
        }
      </div>
    </div>
  )
}

export default SummaryTable;