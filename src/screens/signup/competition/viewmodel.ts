import React, { useState, useEffect } from "react";
import { getCompetitionEvents } from "../../../utils/helper";
import { goBack } from "../../../services/Navigation/NavigationService";

export const viewmodel = () => {
    const [events, setEvents] = useState<Array<{
        id: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string;
        continent: string;
    }>>([]);

    const [showModal, setShowModal] = useState<boolean>(false);

    const navigateToHost = (id: string) => {
        setShowModal(true);
    }

    const handleModalClick = () => {
        setShowModal(false);
    }

    const navigateBack = () => {
        goBack();
    }

    useEffect(() => {
        setEvents(getCompetitionEvents());
    }, []);

    return {
        navigateToHost: navigateToHost,
        handleModalClick: handleModalClick,
        showModal: showModal,
        navigateBack: navigateBack,
        events: events,
    }
}