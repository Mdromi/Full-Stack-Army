// import useClock from "../hooks/useClock";
import { useEffect } from "react";
import UseEvents from "../hooks/useEvents";

const testDate = () => {
  const { clock: local } = useClock();
  const { clock: est } = useClock("EST");
  const { clock: pst } = useClock("PST");
  const { clock: pakistan } = useClock("UTC", 5 * 60);
  const { clock: edt } = useClock("EDT");
  const { clock: british } = useClock("BST");
  const { clock: mst } = useClock("MST");

  console.log("local", local.date);
  console.log("est", est.date);
  console.log("pst", pst.date);
  console.log("pakistan", pakistan.date);
  console.log("edt", edt.date);
  console.log("british", british.date);
  console.log("mst", mst.date);
};

const testEvent = () => {
  const {
    events,
    getEventsByClockId,
    getEvents,
    addEvent,
    deleteEvent,
    deleteEventByClock,
    updateEvent,
  } = UseEvents();

  useEffect(() => {
    if (Object.keys(events).length === 0)
      addEvent({ Title: "Test", clockId: "CLC-111" });

    console.log("All Events", getEvents());
    console.log("All Events Array", getEvents(true));
    console.log("Event By id", getEventsByClockId("CLC-111"));
  }, [events]);
};

export default testEvent;
