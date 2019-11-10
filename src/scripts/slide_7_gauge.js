var theme = {
    color: [
        '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
        '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
    ],

    textStyle: {
        fontFamily: 'Arial, Verdana, sans-serif'
    }
};

var echartGauge = echarts.init(document.getElementById('echart_guage'), theme);

function gauge(id) {
    /*echartGauge*/

    if (id == 0) {

        echartGauge.setOption({
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },

            series: [{
                name: '',
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                precision: 0,
                splitNumber: 5,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },
                axisTick: {
                    show: true,
                    splitNumber: 5,
                    length: 8,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: false,
                    formatter: function(v) {
                        switch (v + '') {
                            case '10':
                                return 'a';
                            case '30':
                                return 'b';
                            case '60':
                                return 'c';
                            case '90':
                                return 'd';
                            default:
                                return '';
                        }
                    },
                    textStyle: {
                        color: '#333'
                    }
                },
                splitLine: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                        type: 'solid'
                    }
                },
                pointer: {
                    length: '72%',
                    width: 8,
                    color: 'auto'
                },
                title: {
                    show: false,
                    offsetCenter: ['0%', -170],
                    textStyle: {
                        color: '#333',
                        fontSize: 20
                    }
                },
                detail: {
                    show: true,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: '#ccc',
                    width: 100,
                    height: 40,
                    offsetCenter: ['0%', 25],
                    formatter: '{value}%',
                    textStyle: {
                        color: 'auto',
                        fontSize: 30
                    }
                },
                data: [{
                    value: 0,
                    name: ''
                }]
            }]
        });

    } else if (id == 1) {

        echartGauge.setOption({

            series: [{
                name: 'Avant 7h',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.87, '#ffca18'],
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },

                data: [{
                    value: 87,
                    name: 'Avant 7h'
                }]
            }]
        });

    } else if (id == 2) {

        echartGauge.setOption({

            series: [{
                name: 'Après 20h',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.43, '#f65e53'],
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },

                data: [{
                    value: 43,
                    name: 'Après 20h'
                }]
            }]
        });

    } else if (id == 3) {

        echartGauge.setOption({

            series: [{
                name: 'Le samedi',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.25, '#67c7f7'],
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },

                data: [{
                    value: 25,
                    name: 'Le samedi'
                }]
            }]
        });

    } else if (id == 4) {

        echartGauge.setOption({

            series: [{
                name: 'Le dimanche',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.08, '#2ae98c'],
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },

                data: [{
                    value: 8,
                    name: 'Le dimanche'
                }]
            }]
        });

    } else if (id == 5) {

        echartGauge.setOption({

            series: [{
                name: 'La nuit',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.32, '#37004d'],
                            [1, '#bbbbbb']
                        ],
                        width: 32
                    }
                },

                data: [{
                    value: 32,
                    name: 'La nuit'
                }]
            }]
        });

    }

}

gauge(0);

var graph = 0;

function switchBackground(id) {

    if (id == 0) {
        document.getElementsByClassName("img7x1")[0].src = "assets/images/illu_matin.png";
        document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#ffca18';
        document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("txt7x9")[0].style.display = 'block';
        document.getElementsByClassName("txt7x10")[0].style.display = 'none';
        document.getElementsByClassName("txt7x11")[0].style.display = 'none';
        document.getElementsByClassName("txt7x12")[0].style.display = 'none';
        document.getElementsByClassName("txt7x13")[0].style.display = 'none';

    } else if (id == 1) {
        document.getElementsByClassName("img7x1")[0].src = "assets/images/illu_21h.png";
        document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#f65e53';
        document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("txt7x10")[0].style.display = 'block';
        document.getElementsByClassName("txt7x9")[0].style.display = 'none';
        document.getElementsByClassName("txt7x11")[0].style.display = 'none';
        document.getElementsByClassName("txt7x12")[0].style.display = 'none';
        document.getElementsByClassName("txt7x13")[0].style.display = 'none';
    } else if (id == 2) {
        document.getElementsByClassName("img7x1")[0].src = "assets/images/illu_samedi.png";
        document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#67c7f7';
        document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("txt7x11")[0].style.display = 'block';
        document.getElementsByClassName("txt7x9")[0].style.display = 'none';
        document.getElementsByClassName("txt7x10")[0].style.display = 'none';
        document.getElementsByClassName("txt7x12")[0].style.display = 'none';
        document.getElementsByClassName("txt7x13")[0].style.display = 'none';
    } else if (id == 3) {
        document.getElementsByClassName("img7x1")[0].src = "assets/images/illu_dimanche.png";
        document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#2ae98c';
        document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("txt7x12")[0].style.display = 'block';
        document.getElementsByClassName("txt7x9")[0].style.display = 'none';
        document.getElementsByClassName("txt7x10")[0].style.display = 'none';
        document.getElementsByClassName("txt7x11")[0].style.display = 'none';
        document.getElementsByClassName("txt7x13")[0].style.display = 'none';
    } else if (id == 4) {
        document.getElementsByClassName("img7x1")[0].src = "assets/images/illu_nuit.png";
        document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#37004d';
        document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#bbbbbb';
        document.getElementsByClassName("txt7x13")[0].style.display = 'block';
        document.getElementsByClassName("txt7x9")[0].style.display = 'none';
        document.getElementsByClassName("txt7x10")[0].style.display = 'none';
        document.getElementsByClassName("txt7x11")[0].style.display = 'none';
        document.getElementsByClassName("txt7x12")[0].style.display = 'none';
    } else if (id == 5) {

        if (graph == 0) {
            document.getElementsByClassName("graph7")[0].style.display = 'block';
            document.getElementsByClassName("button7x6")[0].style.backgroundColor = '#9B59B6';
            graph = 1;
        } else if (graph == 1) {
            document.getElementsByClassName("graph7")[0].style.display = 'none';
            document.getElementsByClassName("button7x6")[0].style.backgroundColor = '#bbbbbb';
            graph = 0;
        }
    }
}