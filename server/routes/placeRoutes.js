// Import Express to create routes
import express from "express";

// Import the Place and User models
import Place from "../models/Place.js";
import User from "../models/User.js";

// Create a router object from Express
const router = express.Router();

/**
 * ---------------------------------------------
 * POST /api/places/vote
 * ---------------------------------------------
 * This route handles voting (upvote/downvote) on a place
 */
router.post("/vote", async (req, res) => {
  try {
    // Extract required data from request body
    const { placeId, userId, voteType } = req.body;

    // Check if required data is missing
    if (!placeId || !userId || !voteType) {
      return res.status(400).json({
        message: "placeId, userId, and voteType are required"
      });
    }

    // Find the user who is voting
    const user = await User.findById(userId);

    // If user does not exist, stop execution
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Find the place being voted on
    const place = await Place.findById(placeId);

    // If place does not exist, stop execution
    if (!place) {
      return res.status(404).json({
        message: "Place not found"
      });
    }

    // Initialize vote value (how many points to add/subtract)
    let voteValue = 0;

    /**
     * Decide vote weight based on user role
     * Guardian votes carry more trust
     */
    if (user.role === "Guardian") {
      voteValue = 5;
    } else if (user.role === "Tourist") {
      voteValue = 1;
    } else {
      // If some other role tries voting (safety check)
      return res.status(403).json({
        message: "This role is not allowed to vote"
      });
    }

    /**
     * Apply upvote or downvote
     */
    if (voteType === "upvote") {
      place.verificationScore += voteValue;
    } else if (voteType === "downvote") {
      place.verificationScore -= voteValue;
    } else {
      return res.status(400).json({
        message: "voteType must be either 'upvote' or 'downvote'"
      });
    }

    /**
     * Automatic status update logic
     */

    // If score goes above 50, mark as Hidden Gem
    if (place.verificationScore > 50) {
      place.isHiddenGem = true;
    }

    // If score goes below -10, hide the post
    if (place.verificationScore < -10) {
      place.isHiddenGem = false;
    }

    // Save updated place to database
    await place.save();

    // Send success response
    res.status(200).json({
      message: "Vote registered successfully",
      verificationScore: place.verificationScore,
      isHiddenGem: place.isHiddenGem
    });
  } catch (error) {
    // Catch unexpected errors
    console.error(error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

// Export the router so it can be used in server.js
export default router;
