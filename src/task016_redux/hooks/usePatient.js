import { useDispatch, useSelector } from "react-redux";
import {
    addPatient as addPatientAction,
    deletePatient as deletePatientAction
} from "../redux/patientSlice";

const usePatient = () => {
    const patients = useSelector(
        // reads from store
        (state) => state.patient.patients
    );

    // useDispatch = CHANGE / SEND ACTION
    const dispatch = useDispatch();

    const addPatient = (patient) => {
        dispatch(addPatientAction(patient));
    };
    // When the component calls addPatient("John"), the hook dispatches the Redux action.

    const deletePatient = (patient) => {
        dispatch(deletePatientAction(patient));
    };

    return {
        patients,
        addPatient,
        deletePatient
    };
    // returning these three because any component using usePatients can get these three
};

export default usePatient;