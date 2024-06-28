import React, { useState, useEffect } from "react";
import { getHost } from "../../../utils/helper";
import { goBack, navigate } from "../../../services/Navigation/NavigationService";

export const viewmodel = () => {
    const [hosts, setHosts] = useState<Array<{
        id: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string;
    }>>([]);

    const [showModal, setShowModal] = useState<boolean>(false);

    const navigateToHost = (id: string) => {
        console.log("selected hosts ", id);
        setShowModal(true);
    }

    const handleModalClick = () => {
        setShowModal(false);
    }

    const navigateBack = () => {
        console.log("go back...");
        goBack();
    }

    useEffect(() => {
        setHosts(getHost());
    }, []);

    return {
        navigateToHost: navigateToHost,
        handleModalClick: handleModalClick,
        showModal: showModal,
        navigateBack: navigateBack,
        hosts: hosts,
    }
}