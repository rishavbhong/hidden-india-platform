import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function GuardianDashboard() {
  const { user } = useAuth(); // Logged-in Guardian
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch unverified places when page loads
  useEffect(() => {
    const fetchUnverifiedPlaces = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/places/unverified");
        const data = await res.json();
        setPlaces(data);
      } catch (error) {
        console.error("Failed to fetch places", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUnverifiedPlaces();
  }, []);

  // Handle verify or flag action
  const handleVote = async (placeId, voteType) => {
    try {
      await fetch("http://localhost:5000/api/places/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          placeId,
          userId: user._id, // Guardian ID
          voteType // "upvote" or "downvote"
        })
      });

      // Remove the place from UI after action
      setPlaces((prev) => prev.filter((p) => p._id !== placeId));
    } catch (error) {
      console.error("Voting failed", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading unverified places...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Guardian Verification Dashboard
      </h1>

      {places.length === 0 ? (
        <p className="text-center text-gray-600">
          No unverified places remaining 🎉
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <div
              key={place._id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col"
            >
              {/* Place title */}
              <h2 className="text-xl font-semibold mb-2">
                {place.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {place.description}
              </p>

              {/* Action buttons */}
              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => handleVote(place._id, "upvote")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg"
                >
                  Verify (Real)
                </button>

                <button
                  onClick={() => handleVote(place._id, "downvote")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg"
                >
                  Flag (Fake)
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GuardianDashboard;
