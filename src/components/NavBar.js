import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

import { Navbar as HospitalRunNavbar, Toast } from '@hospitalrun/components'


class NavBar extends React.Component {

    render() {

        return (
             
                <HospitalRunNavbar
                  bg="dark"
                  variant="dark"
                  navItems={[
                    {
                      type: 'link-list-icon',
                      label: '',
                      name: 'menu',
                      size: 'lg',
                      iconClassName: 'align-bottom',
                      children: [
                        {
                          type: 'link',
                          label: 'Daily Care',
                          icon: 'dashboard',
                          href: '/daily-care',
                        },
                        {
                          type: 'link',
                          label: 'New Patient',
                          icon: 'patient-add',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'New Patient clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Patients List',
                          icon: 'patients',
                          onClick: () => {
                            Toast('success', 'Patients List clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'New Appointment',
                          icon: 'appointment-add',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'New Appointment clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Appointment Schedule',
                          icon: 'appointment',
                          onClick: () => {
                            Toast('success', 'Appointment Schedule clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'New Lab Request',
                          icon: 'add',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'New Lab Request clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Lab Requests',
                          icon: 'lab',
                          onClick: () => {
                            Toast('success', 'Lab Requests clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Report Incident',
                          icon: 'add',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'Report Incident clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Reported Incidents',
                          icon: 'incident',
                          onClick: () => {
                            Toast('success', 'Reported Incidents clicked!!', 'Success')
                          },
                        },
                        {
                          type: 'link',
                          label: 'Settings',
                          icon: 'setting',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'Settings clicked!!', 'Success')
                          },
                        },
                      ],
                    },
                    {
                      type: 'header',
                      label: 'HospitalRun',
                      onClick: () => {
                        Toast('success', 'Header clicked!!', 'Success')
                      },
                    },
                  ]}
                />
              
        );
    }
}

export default NavBar;
