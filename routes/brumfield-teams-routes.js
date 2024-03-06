/*
============================================
; Title:  brumfield-teams-routes.js 
; Author: Professor Krasso
; Date: 6. February, 2024
; Modified by: Joanna Brumfield
; Description: Team Routes
;===========================================
*/

// requirement statements (express, router, Teams)
const express = require('express');
const Team = require('../models/brumfield-team');

// Create a variable named router and assign it the express.Router() function. 
const router = express.Router();

/** 
 * findAllTeams
 * @openapi
 * /api/teams:
 *   get:
 *     tags:
 *       - Teams
 *     description: API for returning a list of teams documents from MongoODB
 *     summary: return list of team documents
 *     responses:
 *       '200':
 *         description: Array of team names
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find({});
    console.log('Teams:', teams);
    res.json(teams);
  } catch (e) {
    if (e) {
      res.status(501).send({
        'message': `MongoDB Exception: ${e.message}`
      });
    } else {
      res.status(500).send({
        'message': `Server Exception: ${e.message}`
      });
    }
  }
});


// assignPlayerToTeam
/** 
 * @openapi
 * /api/teams/{id}/players:
 *  post:
 *    tags:
 *      - Teams
 *    summary: Add a new player to a team
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Team document id
 *        schema:
 *          type: string
 *          example: "65e89db51f268d6cbbf46487"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - salary
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              salary:
 *                type: number
 *    responses:
 *      '200':
 *        description: Player document
 *      '404':
 *        description: Invalid teamId
 *      '500':
 *        description: Server Exception
 *      '501':
 *        description: MongoDB Exception
 */
router.post('/:id/players', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).exec();
    if (!team) {
      res.status(404).send({
        'message': 'Invalid teamId'
      });
    } else {
      const newPlayer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        salary: req.body.salary
      }
      team.players.push(newPlayer);
      await team.save();

      console.log(newPlayer)
      res.json(newPlayer);
    }
  } catch (e) {
    if (e) {
      res.status(501).send({
        'message': `MongoDB Exception: ${e.message}`
      });
    } else {
      res.status(500).send({
        'message': `Server Exception: ${e.message}`
      });
    }
  }
});


/**
 ** findTeamByTeamId
 * @openapi
 * /api/teams/{id}:
 *   get:
 *     tags:
 *       - Teams
 *     description: Returns team by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Team document id
 *         schema:
 *           type: string
 *           example: "65e89db51f268d6cbbf46487"
 *     responses:
 *       '200':
 *         description: team documents
 *       '404':
 *          description: Invalid teamId
 *       '500':
 *         description: Server exception
 *       '501':
 *         description: MongoDB Exception
 */
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).exec();
    if (!team) {
      res.status(404).send({
        'message': 'Invalid teamId'
      });
    } else {
      console.log(team);
      res.json(team);
    }
  } catch (e) {
    if (e) {
      res.status(501).send({
        'message': `MongoDB Exception: ${e.message}`
      });
    } else {
      res.status(500).send({
        'message': `Server Exception: ${e.message}`
      });
    }
  }
});

/**
 ** findAllPlayersByTeamId
 * @openapi
 * /api/teams/{id}/players:
 *   get:
 *     tags:
 *       - Teams
 *     description: Returns list of players by team Id
 *     summary: returns array of player documents
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Team document id
 *         schema:
 *           type: string
 *           example: "65e89db51f268d6cbbf46487"
 *     responses:
 *       '200':
 *         description: Array of player documents
 *       '404':
 *          description: Invalid teamId
 *       '500':
 *         description: Server exception
 *       '501':
 *         description: MongoDB Exception
 */
router.get('/:id/players', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).exec();
    const players = team.players;
    if (!team) {
      res.status(404).send({
        'message': 'Invalid teamId'
      });
    } else {
      console.log('Players:', players);
      res.json(players);
    }
  } catch (e) {
    if (e) {
      res.status(501).send({
        'message': `MongoDB Exception: ${e.message}`
      });
    } else {
      res.status(500).send({
        'message': `Server Exception: ${e.message}`
      });
    }
  }
});

/**
 *  * deleteTeamById
 * @openapi
 * /api/teams/{id}:
 *   delete:
 *     tags:
 *       - Teams
 *     description: Deletes team by id
 *     summary: deletes a team document
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Team document id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Team document
 *       '404':
 *         description: Invalid teamId
 *       '500':
 *         description: Server exception
 *       '501':
 *         description: MongoDB Exception
 */
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete({
      _id: req.params.id
    }).exec();
    if (!team) {
      res.status(404).send({
        'message': 'Invalid teamId'
      })
    };
    res.status(200).json(team);
  } catch (e) {
    if (e) {
      res.status(501).send({
        'message': `MongoDB Exception: ${e.message}`
      });
    } else {
      res.status(500).send({
        'message': `Server Exception: ${e.message}`
      });
    }
  }
});

/**
 *  * deletePlayerById
 * @openapi
 * /api/teams/{teamId}/players/{playerId}:
 *   delete:
 *     tags:
 *       - Teams
 *     description: Deletes player by id
 *     summary: deletes a player document
 *     parameters:
 *       - name: teamId
 *         in: path
 *         required: true
 *         description: Team document id
 *         schema:
 *           type: string
 *       - name: playerId
 *         in: path
 *         required: true
 *         description: Player document id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Player document
 *       '404':
 *         description: Invalid Team or playerId
 *       '500':
 *         description: Server exception
 *       '501':
 *         description: MongoDB Exception
 */
router.delete('/:teamId/players/:playerId', async (req, res) => {
  try {
    const teamId = req.params
    const playerId = req.params;

    const team = await Team.findByIdAndUpdate(teamId, {
      $pull: {
        players: {
          _id: playerId
        }
      }
    });
    if (!team) {
      res.status(404).send({
        'message': 'Invalid Team or playerId'
      })
    } else {
      console.log("Player deleted")
      res.status(200).json(playerId);
    }

  } catch (e) {
    res.status(501).send({
      'message': `MongoDB Exception: ${e.message}`
    });
  }
});

module.exports = router;