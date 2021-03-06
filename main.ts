DFRobotMaqueenPlus.I2CInit()
let _1_atala = 1
let _2_atala = 0
let _3_atala = 0
let _4_atala = 0
basic.forever(function () {
    if (_1_atala == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 15) {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            _1_atala = 0
            _2_atala = 1
        }
    }
})
basic.forever(function () {
    if (_2_atala == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
        basic.pause(800)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(250)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
        basic.pause(500)
        _2_atala = 0
        _3_atala = 1
        _4_atala = 1
    }
})
basic.forever(function () {
    if (_4_atala == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(200)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
            basic.pause(100)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
            basic.pause(100)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
            basic.pause(100)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
            basic.pause(100)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
            _4_atala = 0
        }
    }
})
basic.forever(function () {
    if (_3_atala == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            }
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
            }
        }
    }
})
