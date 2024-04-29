import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
import Service from '../services/RasporedService';
import useLoading from '../hooks/useLoading';
import useError from '../hooks/useError';
import Raspored from './raspored/Raspored';

export default function Pocetna() {
    const [podaci, setPodaci] = useState([]);
    const { showLoading, hideLoading } = useLoading();
    const { prikaziError } = useError();
  
  
    async function getPodaci() {
      showLoading();
      const odgovor = await Service.get('Raspored');
      if(!odgovor.ok){
        hideLoading();
        prikaziError(odgovor.podaci);
          return;
      }
  
      setPodaci(odgovor.podaci.map((raspored) => {
        return {
          y: Raspored.brojDjelatnika,
          name: Raspored.naziv,
        };
      }));
      hideLoading();
    }
  
    useEffect(() => {
      getPodaci();
    }, []);
  
    return (
      <Container className='mt-4'>
        {podaci.length > 0 && (
          <PieChart
            highcharts={Highcharts}
            options={{
              ...fixedOptions,
              series: [
                {
                  name: 'Djelatnici',
                  colorByPoint: true,
                  data: podaci,
                },
              ],
            }}
          />
        )}
      </Container>
    );
  }
  
  const fixedOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Broj djelatnika po grupi',
      align: 'left',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      enabled: false,
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
  };