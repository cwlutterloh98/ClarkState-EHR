import React, { Component, useState } from 'react';
import { Tab, TabsHeader, } from '@hospitalrun/components'


class Footer extends React.Component {
    
    render() {
        return (
            <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
                <div class="container text-center">
                    <small>Copyright &copy; Clark State College Medical Center 2021</small>
                </div>
            </footer>
        );
    }
}

export default Footer;

